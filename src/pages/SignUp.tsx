
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const SignUp = () => {
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
            <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
            
            <div className="mb-6 text-center text-sm text-muted-foreground">
              <p>Sign up to book events and get personalized recommendations</p>
            </div>
            
            {/* This is where Clerk sign-up component would go */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="first-name" 
                    className="block text-sm font-medium mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    className="w-full h-10 px-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="last-name" 
                    className="block text-sm font-medium mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    className="w-full h-10 px-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                    placeholder="Last name"
                  />
                </div>
              </div>
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
                  placeholder="Create a password"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Password must be at least 8 characters long
                </p>
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label 
                  htmlFor="terms" 
                  className="ml-2 block text-sm text-muted-foreground"
                >
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:text-primary/80">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors button-animation bg-primary text-primary-foreground shadow h-10 px-4"
              >
                Create Account
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link 
                  to="/signin" 
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
