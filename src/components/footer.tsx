"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">CD</span>
              </div>
              <span className="text-lg font-bold text-blue-900">Academy</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Professional tutoring and coaching services helping students achieve their academic goals with personalized learning experiences at CD Academy.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                <span>123 Education Street</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                <span>City, State 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                <span>Phone: (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                <span>Email: info@cdacademy.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Follow Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay connected for the latest educational insights and updates.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaFacebook size={18} />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaInstagram size={18} />
              </Link>
              <Link 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaYoutube size={18} />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} CD Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 