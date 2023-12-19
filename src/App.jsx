import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { ClerkProvider } from "@clerk/clerk-react";
import { Button, Typography} from "@material-tailwind/react";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <SignedOut>
          <Typography>This content is public. Only signed out users can see this.</Typography>
          <Button color="blue">
            <SignInButton />
          </Button>        
        </SignedOut>
      </div>
      
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
