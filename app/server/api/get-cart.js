import Client from 'shopify-buy'

const { shopifyDomain, shopifyStorefrontToken } = useRuntimeConfig()

const shopifyClient = Client.buildClient({
    domain: shopifyDomain,
    storefrontAccessToken: shopifyStorefrontToken
})

export default defineEventHandler(async (event) => {
    const { checkoutId } = await readBody(event)
    return await shopifyClient.checkout.fetch(checkoutId)
})