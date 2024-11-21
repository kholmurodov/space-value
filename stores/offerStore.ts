type OfferType = {
    title: string,
    image?: string,
    description?: string,
}

type OfferStoreShape = {
    offers: OfferType[];
}

export const useOfferStore = defineStore('offer', {
    state: (): OfferStoreShape => ({
        offers: [
            {
                title: 'SEO Analysis',
                image: '',
                description: 'Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.',
            },
            {
                title: 'Website Reporting',
                image: '',
                description: 'Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.',
            },
            {
                title: 'Performance Tests',
                image: '',
                description: 'Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.',
            },
            {
                title: 'Data Analysis',
                image: '',
                description: 'Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.',
            },
        ]
    }),
});