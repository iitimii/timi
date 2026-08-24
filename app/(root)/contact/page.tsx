import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactLinks } from "@/components/contact/contact-links";
import { pagesConfig } from "@/config/pages";
import { profile } from "@/config/profile";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto max-w-4xl pb-16">
        <ContactLinks links={profile.socialLinks} />
      </div>
    </PageContainer>
  );
}
