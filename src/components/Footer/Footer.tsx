import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-gray-800 bg-[#313647]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">創意科技工程師</h3>
            <p className="text-gray-400">
              在程式碼、設計與藝術的交匯處，打造視覺引擎。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#A3B087]">快速連結</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#works" className="text-gray-400 hover:text-[#A3B087] transition-colors">
                  作品
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#A3B087] transition-colors">
                  關於
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#A3B087]">聯絡方式</h4>
            <div className="space-y-2">
              <a
                href="mailto:your.email@example.com"
                className="block text-gray-400 hover:text-neon-cyan transition-colors"
              >
                Email
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-neon-cyan transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-neon-cyan transition-colors"
              >
                LinkedIn
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 創意科技工程師. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

