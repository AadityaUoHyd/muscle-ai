import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const ProgramDetailPage = async () => {
  const user = await currentUser();

  return (
    <div className="max-w-xl mx-auto mt-20 text-center px-4 py-16">
      <h1 className="text-2xl font-semibold text-destructive mb-4">Access Denied</h1>

      <p className="text-muted-foreground mb-4">
        You are not authorised to see details of others. Log in and generate your plan, then you can see your own details.
      </p>

      {!user ? (
        <div className="flex justify-center gap-4">
          <SignInButton>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-purple-500 transition-colors">
              Log In
            </button>
          </SignInButton>

          <SignUpButton>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-purple-500 transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      ) : (
        <p className="text-muted-foreground mt-4">
          You are logged in as <strong>{user.firstName}</strong>. Please generate your program first to view details.
        </p>
      )}
    </div>
  );
};

export default ProgramDetailPage;
