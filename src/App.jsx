import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { ClerkProvider } from "@clerk/clerk-react";
import { Button, Typography} from "@material-tailwind/react";
import './App.css'

function App() {
  return (
    <div className="landing">
      
        
        <SignedOut>
        <div className="flex flex-col items-center justify-center">
        <div className="header">COALSENSE CONNECT</div>
          <div className="description">
           Drive Data Beyond Limits: Empower Your Fleet with Unrivaled Telemetry Mastery 
          </div>
          <br/>
        
                  <Button color="blue">
                    <SignInButton />
                  </Button>  
          </div>      
        </SignedOut>
      
      
      <div>
        <SignedIn>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </SignedIn>
      </div>
      
      
      

    </div>
    
  );
}

export default App;