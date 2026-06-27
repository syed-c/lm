import React, { useState, useRef, useEffect } from 'react';
import { Calendar, X, Send, ArrowRight, Building, CheckCircle2, ShieldAlert, AlertCircle, Phone, Mail, User } from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Burbank Appointment', // Default to patient appointment
    fullName: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    destination: string;
    actionUrl?: string;
    message: string;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close widget if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Only close if it's not the floating toggle button itself
        const toggleBtn = document.getElementById('floating-contact-trigger');
        if (toggleBtn && !toggleBtn.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessInfo(null);

    // Prepare full message that includes preferred date context for backend transparency
    const messagePayload = formData.preferredDate 
      ? `[Preferred Date/Time: ${formData.preferredDate}] ${formData.message}`
      : formData.message;

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formData.type,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: messagePayload,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Correspondence service could not process this request.');
      }

      setSuccessInfo({
        destination: result.routingDetails.destination,
        actionUrl: result.routingDetails.actionUrl,
        message: result.routingDetails.message,
      });

      // Clear general form inputs but keep the clinic type
      setFormData({
        type: formData.type,
        fullName: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="floating-care-widget-container" ref={containerRef}>
      
      {/* 1. FLOATING ACTION TRIGGER BUTTON */}
      <button
        id="floating-contact-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
          // Reset success state on open/re-open
          if (!isOpen) {
            setSuccessInfo(null);
            setErrorMsg(null);
          }
        }}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-brand-stone/40 ${
          isOpen 
            ? 'bg-brand-charcoal text-brand-white' 
            : 'bg-brand-bronze text-brand-white hover:bg-brand-bronze-light'
        }`}
        title="Quick Care Appointment Form"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline">Close</span>
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Book Care</span>
          </>
        )}
      </button>

      {/* 2. COMPACT APPOINTMENT REQUEST POPOVER */}
      {isOpen && (
        <div 
          id="compact-care-popover" 
          className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] sm:w-96 bg-brand-white border border-brand-stone/60 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[82vh] transition-all duration-300 animate-reveal"
        >
          {/* Top Bar Accent Branding */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-bronze" />

          {/* Popover Header */}
          <div className="bg-brand-white px-5 py-4 border-b border-brand-stone flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-brand-bronze/10 text-brand-bronze">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-brand-charcoal text-base">
                  Care Routing Guide
                </h3>
                <span className="text-[10px] text-slate-400 font-mono block">Direct Appointment Match</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-brand-charcoal transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content Shell */}
          <div className="p-5 overflow-y-auto space-y-4 max-h-[60vh]">
            
            {/* Minimal HIPAA Disclaimer Banner */}
            <div className="bg-brand-plum/5 border border-brand-plum/10 rounded-xl p-3 flex gap-2.5 text-brand-plum">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed">
                <span className="font-bold uppercase tracking-wider block mb-0.5 text-[9.5px]">HIPAA Safety:</span>
                Please omit clinical diagnostic records, photos, or sensitive history. All portals route to HIPAA-certified receptions.
              </div>
            </div>

            {successInfo ? (
              /* Success Redirection State */
              <div className="bg-brand-bronze/5 border border-brand-bronze/20 rounded-xl p-4 text-brand-charcoal animate-reveal space-y-3.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-[14px]">
                      Match Complete
                    </h4>
                    <span className="text-[9px] font-mono text-slate-400 block uppercase mt-0.5">
                      Route: {successInfo.destination}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {successInfo.message}
                </p>

                {successInfo.actionUrl && (
                  <a
                    href={successInfo.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white font-mono text-[11.5px] font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <span>Finalize Secure Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ) : (
              /* Active Form State */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Select Clinic Location */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1" htmlFor="widget-type">
                    Select Practice Location
                  </label>
                  <select
                    id="widget-type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full bg-brand-white border border-brand-stone hover:border-brand-bronze focus:border-brand-bronze p-2.5 rounded-lg text-xs text-brand-charcoal outline-none transition-all cursor-pointer font-sans"
                  >
                    <option value="Burbank Appointment">Magnolia Dentistry (Burbank)</option>
                    <option value="Beverly Hills Appointment">ConfiDental (Beverly Hills)</option>
                  </select>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1" htmlFor="widget-fullName">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      id="widget-fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your First & Last Name"
                      className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze pl-9 pr-3 py-2 rounded-lg text-xs outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1" htmlFor="widget-email">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      id="widget-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com"
                      className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze pl-9 pr-3 py-2 rounded-lg text-xs outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1" htmlFor="widget-phone">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      id="widget-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze pl-9 pr-3 py-2 rounded-lg text-xs outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time Selection */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1" htmlFor="widget-preferredDate">
                    Preferred Booking Target (Optional)
                  </label>
                  <input
                    id="widget-preferredDate"
                    name="preferredDate"
                    type="text"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    placeholder="e.g. Next Tuesday morning, July 14"
                    className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze px-3 py-2 rounded-lg text-xs outline-none transition-all font-sans"
                  />
                </div>

                {/* Notes message */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1" htmlFor="widget-message">
                    Brief Care Notes *
                  </label>
                  <textarea
                    id="widget-message"
                    name="message"
                    required
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g., Routine cleaning, aesthetic evaluation..."
                    className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze p-2.5 rounded-lg text-xs outline-none transition-all resize-none font-sans"
                  />
                </div>

                {errorMsg && (
                  <div className="bg-red-50 border border-red-150 rounded-lg p-2.5 text-[11px] text-red-600 flex items-start gap-2 animate-reveal">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 bg-brand-charcoal text-brand-white hover:bg-brand-bronze hover:text-brand-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                    isLoading ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <span>Matching Coordinates...</span>
                  ) : (
                    <>
                      <span>Match Booking Portal</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Footer Branding Panel */}
          <div className="bg-brand-white border-t border-brand-stone px-5 py-3 text-center">
            <span className="text-[9.5px] font-mono text-slate-400">
              Provider Directory Verification Code: <b>NPI-ACTIVE</b>
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
