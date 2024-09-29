import { Terminal } from 'lucide-react';

import Layout from '@/components/elements/layout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AchievementsPage() {
  const items = [
    { href: "/about", title: "About" },
    { href: "#", title: "Achievements" },
  ]

  return (
    <>
      <Layout
        activeNav={"About"}
        variant="subFolder"
        crumbsList={items}
      >
        <div className="bg-gray-500 flex justify-center items-center w-full">
          <Alert className="w-fit">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              <h1>🏗️🚧Page Under Construction🚧👷</h1>
            </AlertDescription>
          </Alert>
        </div>
      </Layout>

    </>
  );
};