import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mb-24">
      <div className="padding-container mx-auto max-w-[1440px] flex w-full flex-col gap-6">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src={"hilink-logo.svg"} alt="hilink" width={73} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="text-base font-semibold flex flex-col gap-4 text-gray-500">
                  {columns.links.map((link) => (
                    <Link href={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-6">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href={"/"} key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-6">
              <FooterColumn title={SOCIALS.title}>
                <ul className="text-lg text-gray-500 flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border border-gray-300"/>
        <p className="font-medium text-base text-gray-500 text-center">
          2025 Hilink | All right reserved
        </p>
      </div>
    </div>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
