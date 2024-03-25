// Database schema definition
const schema = {
    spots: {
        name: { type: 'string', required: true },
        description: { type: 'string' },
        category: { type: 'string', required: true },
        latitude: { type: 'number', required: true },
        longitude: { type: 'number', required: true },
        // Add more fields as needed
    },
    paths: {
        name: { type: 'string', required: true },
        startSpot: { type: 'reference', required: true, collection: 'spots' },
        endSpot: { type: 'reference', required: true, collection: 'spots' },
        spots: [{ type: 'reference', collection: 'spots' }],
        // Add more fields as needed
    },
    categories: {
        name: { type: 'string', required: true },
        // Add more fields as needed
    },
    // Add more collections as needed
};

export default schema;
