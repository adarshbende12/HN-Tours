export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "HN Tours made our Golden Triangle trip absolutely magical! The guide was knowledgeable, hotels were excellent, and every detail was perfectly planned. Highly recommend!",
    date: "2 weeks ago",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Fantastic Kerala backwater experience! The houseboat was amazing and the team was very professional. Will definitely book with HN Tours again for our next vacation.",
    date: "1 month ago",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Our Rajasthan heritage tour exceeded all expectations! The desert safari in Jaisalmer was breathtaking. Thank you HN Tours for such wonderful memories!",
    date: "3 weeks ago",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 5,
    text: "Excellent service from start to finish! The Himalayan adventure tour was well-organized and the team was always available for support. Truly professional!",
    date: "1 week ago",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Meera Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Amazing Goa beach package! Perfect blend of relaxation and adventure. The water sports were thrilling and the accommodations were top-notch. Loved it!",
    date: "2 months ago",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "Arjun Gupta",
    location: "Pune",
    rating: 5,
    text: "South India temple tour was spiritually enriching! The guides were very knowledgeable about the history and culture. HN Tours made it a memorable journey.",
    date: "3 months ago",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 7,
    name: "Sunita Joshi",
    location: "Jaipur",
    rating: 5,
    text: "The team at HN Tours is exceptional! They customized our family trip perfectly and took care of every detail. Our kids had an amazing time!",
    date: "1 month ago",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 8,
    name: "Amit Verma",
    location: "Kolkata",
    rating: 5,
    text: "Professional service and great value for money. The photography tour was exactly what I was looking for. Captured some amazing shots!",
    date: "2 weeks ago",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];