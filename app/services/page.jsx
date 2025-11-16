"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    num: "01",
    title: "Google Ads",
    description:
      "We create targeted Google Ads campaigns tailored to your business goals. By leveraging keyword intent, audience segmentation, and A/B testing, we ensure cost-effective ad spend and maximum ROI. Customers benefit from instant visibility, increased website traffic, and high-quality leads. Whether you want to generate sales, promote services, or improve brand awareness, our data-driven strategies deliver measurable results, helping you grow faster in competitive markets.",
    href: "",
  },
  {
    num: "02",
    title: "Meta Ads",
    description:
      "Our Meta Ads campaigns utilize advanced targeting on Facebook and Instagram to reach your ideal audience. We craft engaging ad creatives, optimize budgets, and analyze performance for continuous improvement. Customers gain better brand visibility, increased engagement, and cost-efficient conversions. From lead generation to retargeting, our strategies ensure your business stands out on social platforms, driving consistent results and building lasting customer relationships.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile App Promotion",
    description:
      "Our mobile app promotion services focus on app store optimization, targeted ad campaigns, and user engagement strategies. Customers gain improved app visibility, higher downloads, and increased active users. By leveraging app-install ads and in-app analytics, we attract the right audience and enhance user retention. Our strategies ensure your app ranks higher in app stores, delivering measurable results in the competitive app ecosystem.",
    href: "",
  },
  {
    num: "04",
    title: "Lead Generation",
    description:
      "We implement proven lead generation techniques like landing page optimization, paid ads, and strategic content. Customers benefit from a steady stream of high-quality leads and increased web traffic. Our data-driven approach ensures targeted outreach to your ideal audience, maximizing conversions while reducing acquisition costs. Whether your goal is B2B or B2C, our strategies deliver actionable results to help grow your revenue and customer base.",
    href: "",
  },
  {
    num: "05",
    title: "Content Marketing",
    description:
      "We develop high-quality blogs, videos, and infographics to drive traffic and boost engagement. Our SEO-optimized content aligns with your target audience’s needs, improving search engine rankings and brand trust. Customers enjoy sustained organic growth, increased website visits, and better customer retention. By combining storytelling with analytics, we ensure your content not only educates but also converts, positioning your business as an industry leader.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <Head>
        <title>Performance Marketing Services | Contact Now</title>
        <meta
          name="description"
          content="Explore the comprehensive digital marketing services at Marketing with Kashyap. From SEO to Google Ads and social media marketing, we provide effective solutions to grow your online presence."
        />
        <meta
          name="keywords"
          content="Performance Marketing, Google Ads, Meta Ads, LinkedIn Ads, Lead Generation, Mobile App Promotion, Traffic Generation, Content Marketing"
        />
        <meta name="author" content="Marketing with Kashyap" />
        <meta property="og:title" content="Marketing with Kashyap | Services" />
        <meta
          property="og:description"
          content="Explore the comprehensive digital marketing services at Marketing with Kashyap. From SEO to Google Ads and social media marketing, we provide effective solutions to grow your online presence."
        />
        <meta property="og:url" content="https://marketingwithkashyap.com/services" />
        <meta property="og:image" content="https://marketingwithkashyap.com/images/og-image.jpg" />
      </Head>

      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
