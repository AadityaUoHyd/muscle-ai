export default function TermsPage() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
        <p className="mb-4 text-muted-foreground">
          By using Muscle-AI, you agree to be bound by the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Service</h2>
        <p className="mb-4 text-muted-foreground">
          Our platform provides personalized fitness programs using AI technology. The information provided is for guidance purposes only and should not replace professional medical advice.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Account Responsibility</h2>
        <p className="mb-4 text-muted-foreground">
          You are responsible for maintaining the confidentiality of your account. Misuse may result in termination of access.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Modifications</h2>
        <p className="mb-4 text-muted-foreground">
          We reserve the right to update these terms at any time. Continued use of the service implies acceptance of the updated terms.
        </p>
      </div>
    );
  }
  