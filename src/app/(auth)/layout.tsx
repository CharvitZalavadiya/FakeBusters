const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="authAnimation h-screen flex items-center bg-primaryBackground justify-center">
        {children}
      </div>
    );
  };
  
  export default AuthLayout;
  