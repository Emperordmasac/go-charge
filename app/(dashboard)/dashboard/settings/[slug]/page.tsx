import { settingsDashboard } from "@/config/dashboard";
import { SettingsDashboard } from "@/components/nav";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return settingsDashboard.sidebarNav.map((link) => ({
    slug: link.href,
  }));
}

export default async function SettingsdPage({ params }) {
  const { slug } = params;

  let content: any;

  switch (slug) {
    case "profile":
      content = <ProfileContent />;
      break;
    case "pricing":
      content = <PricingContent />;
      break;
    case "team-management":
      content = (
        <div>
          <h1>Team management content</h1>
        </div>
      );
      break;
    case "api-management":
      content = (
        <div>
          <h1>api-management content</h1>
        </div>
      );
      break;
    case "push-notifications":
      content = (
        <div>
          <h1>push notifications content</h1>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h1>Profile content</h1>
        </div>
      );
  }

  return (
    <div className="flex min-h-screen flex-col fixed w-full">
      {/* settings header */}
      <header className="border-b w-full bg-background px-8 py-a">
        <div className="w-full flex items-center mb-[20px] text-[#000] text-[36px] font-bold">
          <h2>Settings</h2>
        </div>
      </header>
      {/* settings sidebar */}
      <div className="w-full mx-auto px-8 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <div className="border-r">
          <aside className="hidden w-[200px] flex-col md:flex ">
            <SettingsDashboard items={settingsDashboard.sidebarNav} />
          </aside>
        </div>
        <main className="flex w-full flex-1 flex-col overflow-hidden pt-8">
          {content}
        </main>
      </div>
    </div>
  );
}

const ProfileContent = () => {
  return (
    <div className="mt-[30px] ml-[33px] flex gap-[66px]">
      <div className="flex flex-col justify-center w-fit items-center cursor-pointer">
        <Icons.profile />
        <span className="text-[#EF895F] text-[12px] mt-[2px]">
          add a picture
        </span>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-[10px]">
          <Input className="w-[319px]" placeholder="Emmanuel" />
          <Input className="w-[319px]" placeholder="Abu" />
          <Input
            className="w-[319px] mt-[9.5px]"
            placeholder="emmanuelabu@gmail.com"
          />
          <Input
            className="w-[319px] mt-[9.5px]"
            type="password"
            placeholder="• • • • • • • • • • "
          />
        </div>
        <span className="text-[#EF895F] text-[12px] mt-[2px] cursor-pointer w-full flex justify-end">
          change password
        </span>
        <div className="w-full flex justify-end mt-[39.5px]">
          <Button className="bg-[#808080] w-[319px]">Update</Button>
        </div>
      </div>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="mt-[20px]">
      <h2 className="text-[#000] text-[16px] font-semibold">
        Charging base fee
      </h2>
      <div className="flex gap-[70px]">
        <p className="text-[#8A8A8F] text-[14px] max-w-[243px] mt-[5px]">
          This is the base fee for charging across all stations. The cost of
          charging cannot go lower than this.
        </p>
        <Input className="w-[20%] mt-[15px]" />
      </div>
    </div>
  );
};
