export default function ContactPage() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        
        <p className="text-muted-foreground mb-8">
          We are here to help! Reach out to us through any of the methods below, or drop a message using the contact form.
        </p>
  
        <div className="mb-12 space-y-4 text-base text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">📞 Mobile:</span> +91 9999999999
          </div>
          <div>
            <span className="font-semibold text-foreground">✉️ Email:</span>{" "}
            <a href="mailto:support@muscleai.com" className="text-primary underline">
              support@muscleai.com
            </a>
          </div>
          <div>
            <span className="font-semibold text-foreground">📍 Office Location:</span> 
            123 Fitness Avenue, SR Nagar, Hyderabad-500038 , India
          </div>
        </div>
  
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  