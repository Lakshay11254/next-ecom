export default{
    name: 'product',
    type: 'document',
    title: 'Product',
}
fields: [
    {
        name: 'name',
        type: 'string',
        title: 'Name of Product',

    },
    
    {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{type: 'image'}],
    },

    {
        name: 'description',
        type: 'text',
        title: 'Desceiption of product',
    },

    {
        name: 'slug',
        type:'slug',
        title:'',
    },

    {
        name: 'price',
        type:'price',
        title:'number',
    }

]