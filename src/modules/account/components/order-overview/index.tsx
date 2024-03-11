"use client"

import { Order } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import{ useTranslation } from "react-i18next"
const OrderOverview = ({ orders }: { orders: Order[] }) => {
  const { t } = useTranslation()
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h2 className="text-large-semi">{t("nothing-to-see")}</h2>
      <p className="text-base-regular">
      {t("no-orders-yet")} {":)"}
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button>{t("continue-shopping")}</Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
