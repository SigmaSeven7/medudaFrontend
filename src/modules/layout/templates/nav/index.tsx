import { headers } from "next/headers"
import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Theme from "@modules/layout/components/theme-toggle"
import LanguageToggle from "@modules/layout/components/language-toggle"
import initTranslations from "app/i18n"
import Image from "next/image"
import { ShoppingCart } from "@medusajs/icons"
export default async function Nav(params:any) {
  const regions = await listRegions().then((regions) => regions)
  const locale = params.children[1];
  const { t } = await initTranslations(locale, ['common']);


  return (
    <div className="sticky top-0 inset-x-0 z-50 group ">
      <header className="relative dark:bg-black bg-ui-bg-subtle h-16 mx-auto border-b duration-200  border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full pr-2 pl-2 h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center sm:justify-between justify-around">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
            <div className="sm:hidden"><Theme/></div>
          </div>

          <div className="flex items-center h-full sm:pl-0 pl-2">
          
            <h1 className="text-center">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              {/* <img className="max-w-[65px] max-h-[60px]" src="/logo.png"></img> */}
              <Image width={60} height={65}  src="/logo.png" alt='Pixels Journey Logo'></Image>
              {/* Pixels Journey */}
            </LocalizedClientLink>
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-x-6 h-full flex-1 basis-0 justify-end sm:pl-0">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  {t("search")}
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
              >
                 {t("account")}
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <a
                  className="hover:text-ui-fg-base flex gap-2 ml "
                  href="/cart"
                >
                    <ShoppingCart className="mr-1" /> 
                </a>
              }
            >
              <CartButton />
            </Suspense>
            <div className="hidden sm:block">
              <Theme/>
            </div>
            <LanguageToggle/>
          </div>
        </nav>
      </header>
    </div>
  )
}
