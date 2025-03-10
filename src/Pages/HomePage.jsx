import React from "react";
import WarehouseFilter from "../components/WarehouseFilter";
import WarehouseCard from "../components/WarehouseCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { filteredWarehouses } = useSelector((state) => state.warehouses);

  return (
    <div className="bg-indigo-900 min-h-screen p-6">
      {/* Warehouse Filter */}
      <div className="mb-6">
        <WarehouseFilter />
      </div>

      {/* Warehouse Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredWarehouses.length > 0 ? (
          filteredWarehouses.map((warehouse) => (
            <WarehouseCard
              id={warehouse.id}
              key={warehouse.id}
              name={warehouse.name}
              city={warehouse.city}
              spaceAvailable={warehouse.space_available}
              type={warehouse.type}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-white font-semibold">
            No warehouses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
