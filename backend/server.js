const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Analytics Endpoint
app.get('/api/admin/analytics', (req, res) => {
    // Dummy analytics data matching the frontend's expected structure
    const analyticsData = {
        revenue: { total: '₹45,231.89', growth: '+12.5%' },
        sales: { total: '1,245', growth: '+8.2%' },
        visitors: { total: '8,492', growth: '+5.1%' },
        conversion: { total: '2.4%', growth: '+2.4%' },
        topProducts: [
            { name: "Premium Cocktail Balls", sales: 450, revenue: "₹22,500" },
            { name: "Classic Mojito Mix", sales: 320, revenue: "₹10,240" },
            { name: "Margarita Blend", sales: 280, revenue: "₹8,960" }
        ],
        recentActivity: [
            { id: 1, action: "New Order #FQ-8922", time: "10 mins ago", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", icon: "shopping_cart" },
            { id: 2, action: "New user registered", time: "1 hour ago", color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30", icon: "person_add" },
            { id: 3, action: "Low stock alert: Mojito Mix", time: "3 hours ago", color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30", icon: "warning" },
        ]
    };

    res.json(analyticsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
