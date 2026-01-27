import { useEffect, useState } from "react";

const DisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleProceed = (): void => {
    if (!checked) return;
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-3xl rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Disclaimer
          </h2>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-4 text-sm leading-relaxed text-gray-700">
          <p className="mb-4">
            The information provided on this website is for general
            informational purposes only and does not constitute
            professional advice, solicitation, or advertisement.
          </p>

          <p className="mb-4">
            By accessing this website, you acknowledge that you are
            seeking information on your own accord and that no form of
            solicitation, inducement, or advertisement has been made
            by the firm or its representatives.
          </p>

          <p className="mb-4">
            The content on this website should not be construed as a
            substitute for professional or legal advice. Visitors are
            advised to seek independent professional consultation
            before making any decision.
          </p>

          <p className="mb-4">
            The firm shall not be responsible for any loss or damage
            arising from reliance on the information provided on this
            website.
          </p>

          <p>
            All content on this website is the intellectual property
            of the firm and is protected under applicable laws.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4">
          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-blue-600"
              checked={checked}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setChecked(e.target.checked)
              }
            />
            <span>
              I have read and understood the above disclaimer and agree
              to the terms of usage of this website.
            </span>
          </label>

          <button
            onClick={handleProceed}
            disabled={!checked}
            className={`mt-4 rounded-md px-6 py-2 text-sm font-medium text-white
              ${
                checked
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "cursor-not-allowed bg-gray-400"
              }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
