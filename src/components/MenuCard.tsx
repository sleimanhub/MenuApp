interface MenuItemProps {
  name: string;
  price: number;
  description?: string;
}

interface MenuCardProps {
  title: string;
  items: MenuItemProps[];
  image: string;
}

const MenuCard = ({ title, items, image }: MenuCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-start group">
              <div className="flex-1">
                <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="ml-4">
                <span className="text-lg font-bold text-accent">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;