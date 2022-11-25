import { ClerkProvider } from "@clerk/nextjs/app-beta";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
