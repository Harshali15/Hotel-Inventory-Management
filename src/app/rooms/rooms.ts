export interface Rooms{
    totalRoom: number;
    availableRooms: number;
    bookedRooms: number;
    onholdRooms?: number;
}

export interface RoomsList{
    roomNumber?: string;
    roomType: string;
    amenities: string;
    price: number;
    image: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}