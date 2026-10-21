import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Camera } from "lucide-react";

export function HomeGalleryPreview() {
  const photos = [
    {
      src: "/images/gallery/beautiful-children.jpg",
      alt: "Children participating in educational session",
      caption: "Creative learning and community activities",
    },
    {
      src: "/images/gallery/children-of-the-nations.jpg",
      alt: "Youth group session in Nairobi",
      caption: "Youth gathering and teamwork",
    },
    {
      src: "/images/gallery/gallery-community-education.jpg",
      alt: "Parents and teachers engaged in dialogue",
      caption: "Community members sharing ideas",
    },
    {
      src: "/images/gallery/joy.jpg",
      alt: "Community celebration and shared meal",
      caption: "Cultural exchange and connection",
    },
    {
      src: "/images/gallery/oh-joy.jpg",
      alt: "Smiles and group moments during project work",
      caption: "Shared effort on project days",
    },
    {
      src: "/images/gallery/donate-ghni.jpg",
      alt: "Community gathering and resource distribution",
      caption: "Practical support and cooperation",
    },
  ];

  return (
    <Section surface="white">
      <Container>
        <SectionHeader
          eyebrow="Gallery"
          title="Moments from our work"
          description="A few glimpses of community projects. We share photographs only with the consent of the people in them."
          action={
            <Button href="/gallery" variant="outline" size="md">
              <span>View the full gallery</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((item, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-abwa-border shadow-xs block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-abwa-blue"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abwa-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-medium text-white line-clamp-2">
                  {item.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-8 text-center md:hidden">
          <Button href="/gallery" variant="primary" size="lg" className="w-full sm:w-auto">
            <span>View the full gallery</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
