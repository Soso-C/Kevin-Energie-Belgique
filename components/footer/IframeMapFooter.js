import React from "react";

export default function IframeMapFooter() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1860430540673!2d5.65089511589629!3d50.456260194827166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c05c017061ff2d%3A0xb6cf7199910cd2f4!2sRue%20Saint-Roch%2042%2C%204920%20Aywaille%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1669504564708!5m2!1sfr!2sfr"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        title="google map kd-energie"
      />
    </div>
  );
}
