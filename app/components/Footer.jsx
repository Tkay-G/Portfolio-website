import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#232946] py-6 mt-16">
    <div className="flex flex-col items-center">
      <div className="flex gap-6 mb-2">
        <a
          href="https://github.com/Tkay-G"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-2xl hover:text-[#7b2cbf]" />
        </a>
        <a
          href="https://linkedin.com/in/takudzwa-gunda-286209278/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-2xl hover:text-[#7b2cbf]" />
        </a>
        <a
          href="https://twitter.com/Tkay17Codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-white text-2xl hover:text-[#7b2cbf]" />
        </a>
        <a
          href="https://instagram.com/styxcode_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white text-2xl hover:text-[#7b2cbf]" />
        </a>
        <a href="mailto:TakuG.dev@email.com">
          <FaEnvelope className="text-white text-2xl hover:text-[#7b2cbf]" />
        </a>
      </div>
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Taku. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
