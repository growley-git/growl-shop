import Client from 'shopify-buy'

const { shopifyDomain, shopifyStorefrontToken } = useRuntimeConfig()

const shopifyClient = Client.buildClient({
    domain: shopifyDomain,
    storefrontAccessToken: shopifyStorefrontToken
})

export default defineEventHandler(async (event) => {
    const { handle } = await readBody(event)
    return await shopifyClient.product.fetchByHandle(handle)
})