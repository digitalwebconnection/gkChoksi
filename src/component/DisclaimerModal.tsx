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
          In accordance with the provisions of the Chartered Accountants Act, 1949, the Firm is not permitted to solicit professional work or advertise its services. 
          </p>

          <p className="mb-4">
         By proceeding further, the user expressly acknowledges and confirms that 
          </p>

          <p className="mb-4">
          (i) no form of advertisement, personal communication, solicitation, invitation, or inducement has been made by the Firm to secure any professional engagement through this website; 
          </p>

          <p className="mb-4">
         (ii) the user is accessing the information solely for the purpose of gaining a general understanding of the Firm and its professional profile, at their own initiative;
          </p>

          <p>
            (iii) all information made available herein is provided strictly upon the user’s specific request and for informational purposes only.
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
