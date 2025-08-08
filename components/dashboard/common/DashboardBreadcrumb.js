"use client";

// import node module libraries
import { Breadcrumb } from "react-bootstrap";

// import required hooks
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

// import helper utility file
import { capitalizedWord } from "helper/utils";

const DashboardBreadcrumb = ({ disabledLink = false }) => {
  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment !== "");
  const router = useRouter();

  return (
    <Breadcrumb className="mb-0">
      {pathSegments.map((segment, index) =>
        index === pathSegments.length - 1 ? (
          <Breadcrumb.Item as="li" active key={segment}>
            {capitalizedWord(segment)}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item
            as="li"
            key={segment}
            linkProps={{
              className: index === 0 || disabledLink ? "text-inherit" : "",
            }}
          >
            <span
              onClick={() => {
                if (!disabledLink) {
                  router.push(`/${pathSegments.slice(0, index + 1).join("/")}`);
                }
              }}
            >
              {capitalizedWord(segment)}
            </span>
          </Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;
