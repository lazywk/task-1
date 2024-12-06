import { Link } from '@tanstack/react-router';

export default function ErrorBox() {
  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
          400
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're sorry, the page you're looking for could not be found. Please try going back to the previous page or contact our support team for further assistance.
        </p>
        <div className="mt-6">
          <Link
            to={'/'}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
