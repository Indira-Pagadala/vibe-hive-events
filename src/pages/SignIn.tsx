
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-white rounded-xl border border-border shadow-md p-8 animate-scale-in">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
            
            <div className="mb-6 text-center text-sm text-muted-foreground">
              <p>Sign in with your account to continue</p>
            </div>
            
            {/* This is where Clerk sign-in component would go */}
            <div className="space-y-4">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full h-10 px-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full h-10 px-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label 
                    htmlFor="remember-me" 
                    className="ml-2 block text-sm text-muted-foreground"
                  >
                    Remember me
                  </label>
                </div>
                <a 
                  href="#" 
                  className="text-sm font-medium text-primary hover:text-primary/80"
                >
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors button-animation bg-primary text-primary-foreground shadow h-10 px-4"
              >
                Sign In
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
