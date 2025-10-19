import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <div>
                <p className="text-sm text-slate-500">
                  &copy; {new Date().getFullYear()} Blog. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-4 text-xs font-semibold uppercase text-slate-500">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-4 text-xs font-semibold uppercase text-slate-500">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wider mb-4 text-xs font-semibold uppercase text-slate-500">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
