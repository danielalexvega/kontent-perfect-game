interface FooterLink {
  text: string;
  url: string;
}

interface FooterData {
  topLinks?: FooterLink[];
  middleLinks?: FooterLink[];
  copyright?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    tiktok?: string;
  };
}

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data }: FooterProps) {
  // Default values if no data is provided
  const footerData = data || {
    topLinks: [
      { text: "PG Special Events", url: "#" },
      { text: "Travel, Lodging, Entertainment", url: "#" },
      { text: "PG Partners", url: "#" },
      { text: "Recommended", url: "#" }
    ],
    middleLinks: [
      { text: "About Perfect Game", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "Terms of Use", url: "#" },
      { text: "Privacy Policy", url: "#" },
      { text: "Testimonials", url: "#" },
      { text: "Job Opportunities", url: "#" }
    ],
    copyright: "Copyright 1994-2023 by Perfect Game. All rights reserved. No portion of this information may be recreated or reproduced without the written consent of Perfect Game.",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
      youtube: "#",
      tiktok: "#"
    }
  };

  return (
    <footer className="bg-[#1a365d] text-white">
      {/* Top Footer Bar */}
      <div className="bg-[#1a365d] py-4 px-4 border-b border-[#2d5a87]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center space-x-6">
            {footerData.topLinks?.map((link, index) => (
              <a key={index} href={link.url} className="hover:text-blue-200 transition-colors">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Footer Bar */}
      <div className="bg-[#2d5a87] py-4 px-4 border-b border-[#1a365d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center space-x-6">
            {footerData.middleLinks?.map((link, index) => (
              <a key={index} href={link.url} className="hover:text-blue-200 transition-colors">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#0f2a4a] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href={footerData.socialLinks?.twitter} className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href={footerData.socialLinks?.instagram} className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href={footerData.socialLinks?.facebook} className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={footerData.socialLinks?.youtube} className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href={footerData.socialLinks?.tiktok} className="text-white hover:text-blue-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-center md:text-right">
              {footerData.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
