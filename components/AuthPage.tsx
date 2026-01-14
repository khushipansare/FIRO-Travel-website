import React, { useState } from 'react';
import { Button } from './ui/Button';

interface AuthPageProps {
  onLogin: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-white overflow-hidden">
      
      {/* Left Side - Cinematic Content */}
      <div className="hidden lg:flex w-1/2 relative bg-black">
        {/* Placeholder for video loop - using an immersive high-quality image as fallback/representation */}
        <div className="absolute inset-0 opacity-80">
            <img 
                src="https://picsum.photos/1000/1200?random=20" 
                alt="Indian Landscape" 
                className="w-full h-full object-cover animate-pulse-slow"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative z-10 p-16 flex flex-col justify-end h-full text-white">
            <h2 className="text-6xl font-serif font-bold mb-4">FIRO.</h2>
            <p className="text-xl font-light opacity-90 max-w-md">Begin your journey into the heart of luxury. Uncover India's best kept secrets.</p>
        </div>
      </div>

      {/* Right Side - Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-firo-navy mb-2">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h3>
            <p className="text-gray-500">
              {isSignUp ? 'Start your exclusive journey today.' : 'Continue exploring curated escapes.'}
            </p>
          </div>

          <div className="space-y-4">
            {isSignUp && (
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 border-b border-gray-300 outline-none focus:border-firo-gold transition-colors font-sans placeholder-gray-400" />
              </div>
            )}
            
            <input type="email" placeholder="Email Address" className="w-full p-3 border-b border-gray-300 outline-none focus:border-firo-gold transition-colors font-sans placeholder-gray-400" />
            
            <input type="password" placeholder="Password" className="w-full p-3 border-b border-gray-300 outline-none focus:border-firo-gold transition-colors font-sans placeholder-gray-400" />
            
            {isSignUp && (
               <input type="password" placeholder="Confirm Password" className="w-full p-3 border-b border-gray-300 outline-none focus:border-firo-gold transition-colors font-sans placeholder-gray-400" />
            )}

            {!isSignUp && (
              <div className="text-right">
                <button className="text-sm text-firo-gold hover:underline">Forgot Password?</button>
              </div>
            )}
          </div>

          <Button 
            fullWidth 
            size="lg"
            onClick={isSignUp ? () => setIsSignUp(false) : onLogin}
          >
            {isSignUp ? 'Create Account' : 'Start Journey'}
          </Button>

          <div className="relative flex items-center justify-center my-6">
             <div className="border-t border-gray-200 w-full absolute"></div>
             <span className="bg-white px-3 relative z-10 text-gray-400 text-sm">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
               <span className="font-bold text-firo-navy">Google</span>
             </button>
             <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
               <span className="font-bold text-firo-navy">Apple</span>
             </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            {isSignUp ? 'Already a member?' : 'New to FIRO?'} 
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 font-bold text-firo-navy hover:text-firo-gold transition-colors underline"
            >
              {isSignUp ? 'Log in' : 'Sign up'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
