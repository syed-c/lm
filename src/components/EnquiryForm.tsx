import React, { useState } from 'react';
import { Send, ArrowRight, Calendar, Sparkles, Building, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'Media Enquiry',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    destination: string;
    actionUrl?: string;
    message: string;
  } | null>(null);

  const enquiryTypes = [
    { value: 'Media Enquiry', label: 'Media & PR Enquiry' },
    { value: 'Podcast or Interview Invitation', label: 'Podcast & Interview Invitation' },
    { value: 'Speaking Invitation', label: 'Keynote & Speaking Invitation' },
    { value: 'Professional Collaboration', label: 'Clinical & Academic Collaboration' },
    { value: 'General Professional Contact', label: 'General Professional Contact' },
    { value: 'Burbank Appointment', label: 'Patient Appointment - Magnolia Dentistry (Burbank)' },
    { value: 'Beverly Hills Appointment', label: 'Patient Appointment - ConfiDental (Beverly Hills)' },
  ];

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

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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

      // Clear general form but keep type for contextual focus
      setFormData({
        type: formData.type,
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isClinicAppointment = 
    formData.type === 'Burbank Appointment' || 
    formData.type === 'Beverly Hills Appointment';

  return (
    <div className="bg-brand-white border border-brand-stone p-6 md:p-8 rounded-2xl shadow-sm relative overflow-hidden" id="enquiry-contact-wrap">
      {/* Absolute top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-bronze" />

      <h3 className="font-display font-semibold text-brand-charcoal text-xl md:text-2xl mb-2 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-brand-bronze" />
        Digital Correspondence Terminal
      </h3>
      
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Select your designated contact channel. Inquiry pipelines are triaged daily according to medical compliance, PR priority, and provider schedules.
      </p>

      {/* HIPAA / Medical Safety Warning Banner */}
      <div className="bg-brand-plum/5 border border-brand-plum/20 rounded-xl p-4 mb-6 leading-relaxed flex gap-3 text-brand-plum">
        <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <span className="block font-medium text-xs uppercase tracking-wider font-mono mb-1">HIPAA PROTECTED MEDICAL BANNER:</span>
          <span className="text-[12px] text-brand-plum/90 block">
            Please do not submit private clinical parameters, diagnosis details, insurance credentials, or dental images. All public communications are managed by media staff.
          </span>
        </div>
      </div>

      {successInfo ? (
        <div className="bg-brand-bronze/5 border border-brand-bronze/30 rounded-xl p-5 md:p-6 text-brand-charcoal animate-reveal">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-8 h-8 text-brand-bronze shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-semibold text-[17px] mb-1">
                Correspondence Successfully Routed
              </h4>
              <p className="text-xs font-mono text-slate-400 mb-2 uppercase">
                Destination: {successInfo.destination}
              </p>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {successInfo.message}
              </p>

              {successInfo.actionUrl && (
                <a
                  href={successInfo.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-bronze hover:bg-brand-bronze-light text-brand-white font-display text-sm font-medium rounded-lg transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <span>Go to Certified Clinic Booking Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Query Type Select */}
          <div>
            <label className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="type">
              Channel Selection *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full bg-brand-white border border-brand-stone hover:border-brand-bronze focus:border-brand-bronze p-3 rounded-lg text-sm text-brand-charcoal outline-none transition-all cursor-pointer"
            >
              {enquiryTypes.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {isClinicAppointment && (
            <div className="bg-brand-bronze/5 border border-brand-bronze/20 rounded-lg p-4 text-[13px] text-brand-charcoal leading-relaxed animate-reveal flex gap-2.5">
              <Building className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Clinical Redirection Notice:</span>
                This portal is for professional branding, articles, media, and public health speaking. To make booking appointments secure, please click below or select contact routing. Your query will trigger direct scheduling redirect guides on submission.
              </div>
            </div>
          )}

          {/* Name & Email Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Legal Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Dr. / Mr. / Ms. Name"
                className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze p-3 rounded-lg text-sm outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="representative@domain.com"
                className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze p-3 rounded-lg text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Phone (Optional) */}
          <div>
            <label className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="phone">
              Phone Number (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze p-3 rounded-lg text-sm outline-none transition-all"
            />
          </div>

          {/* Message Textbox */}
          <div>
            <label className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mb-1.5" htmlFor="message">
              Message / Scope Outline *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder={isClinicAppointment ? 'Describe preferred times and callback times (No clinical history)...' : 'Draft media outline, dates, location, topics, and references...'}
              className="w-full bg-brand-white border border-brand-stone focus:border-brand-bronze p-3 rounded-lg text-sm outline-none transition-all resize-y"
            />
          </div>

          {errorMsg && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3.5 text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 p-3.5 bg-brand-charcoal text-brand-white hover:bg-brand-bronze hover:text-brand-white font-display text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
              isLoading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span>Processing Correspondence Routing...</span>
            ) : (
              <>
                <span>Submit Secure Correspondence</span>
                <Send className="w-4 h-4 animate-pulse" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
