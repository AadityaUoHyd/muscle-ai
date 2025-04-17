export default function PrivacyPage() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <p className="mb-4 text-muted-foreground">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4 text-muted-foreground">
          We collect information like name, email, and user activity to personalize your fitness experience. We never sell your data.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Data</h2>
        <p className="mb-4 text-muted-foreground">
          Your data is used solely for improving your experience, providing support, and internal analytics.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="mb-4 text-muted-foreground">
          We use industry-standard security measures to keep your data safe and comply with applicable data laws.
        </p>
      </div>
    );
  }
  