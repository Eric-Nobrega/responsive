
export const Footer = () => {
  return (
    <div className="border border-t-slate-600 border-l-0 border-b-0 border-r-0 w-full mt-auto px-4 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-y-0">
        <div>
          <h1 className="font-[900]">Socials</h1>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div>
          <h1 className="font-[900]">Services</h1>
          <ul>
            <li>Request Access</li>
            <li>Contact Us</li>
            <li>Get a Quote</li>
          </ul>
        </div>
        <div>
          <h1 className="font-[900]">Development Information</h1>
          <ul>
            <li>Developer</li>
            <li>GitHub</li>
            <li>Date Created</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
