import { createFileRoute } from "@tanstack/react-router";
import { wedding } from "@/content/wedding";
import { Hero } from "@/components/invite/Hero";
import { Blessings } from "@/components/invite/Blessings";
import { Invitation } from "@/components/invite/Invitation";
import { Events } from "@/components/invite/Events";
import { Venue } from "@/components/invite/Venue";
import { SpecialInvitation } from "@/components/invite/SpecialInvitation";
import { FamilyFooter } from "@/components/invite/FamilyFooter";
import { Couple } from "@/components/invite/Couple";
import { Gallery } from "@/components/invite/Gallery";
import { Rsvp } from "@/components/invite/Rsvp";



import { MusicToggle } from "@/components/invite/MusicToggle";

const title = `${wedding.groom} weds ${wedding.bride} — Wedding Invitation`;
const description = `Celebrate Nikhil & Mahima’s wedding on 11 December 2026. With love and blessings from the Jain family.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Remove a line below to remove that whole section.
function Index() {
  return (
    <main className="wedding-page">
      <Hero />
      <Blessings />
      <div>
        <Invitation />
        <Events />
      </div>
      {/* <Couple /> — hidden for this wedding; uncomment to show */}
      <Gallery />
      <Rsvp />
      <Venue />
      {/* <SpecialInvitation /> — hidden for this wedding */}
      <FamilyFooter />
      <MusicToggle />
    </main>
  );
}
