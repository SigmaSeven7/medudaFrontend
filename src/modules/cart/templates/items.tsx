import { getLang } from "@lib/data"
import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"
import initTranslations from "../../../app/i18n"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region,
  locale: string
}

export default async function ItemsTemplate({ items, region,locale }: ItemsTemplateProps) {

  const { t} = await initTranslations(locale, ['common']);
  const rtl = locale === "ar" || locale === "he";
  return (
    <div>
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem]">{t("cart")}</Heading>
      </div>
      <Table>
        <Table.Header className="border-t-0">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus">
            <Table.HeaderCell className={`${rtl ? 'text-right' : ""} !pl-0`}>{t("item")}</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell className={`${rtl ? 'text-right' : ""}`}>{t("quantity")}</Table.HeaderCell>
            <Table.HeaderCell className={`${rtl ? 'text-right' : ""} hidden small:table-cell`}>
            {t("price")}
            </Table.HeaderCell>
            <Table.HeaderCell className={`${rtl ? 'text-left !pl-2' : 'text-right !pr-2'} `}>
            {t("total")}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item locale={locale} key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  );
}


