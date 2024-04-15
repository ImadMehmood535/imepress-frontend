import React from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { currency } from "../../data/currency";
import { IoMdArrowDropdownCircle } from "react-icons/io";
const CurrencyInput = () => {
    return (
        <Select
            className="max-w-xs"
            defaultSelectedKeys={["AED"]}
            selectorIcon={<IoMdArrowDropdownCircle color="black" />}
            items={currency}
            renderValue={(items) => {
                return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <Avatar
                            alt={item.data.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={item.data.avatar}
                        />
                        <div className="flex flex-col">
                            <span>{item.data.name}</span>
                        </div>
                    </div>
                ));
            }}
        >
            {(user) => (
                <SelectItem key={user.id} textValue={user.name}>
                    <div className="flex gap-2 items-center">
                        <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                        <div className="flex flex-col">
                            <span className="text-small">{user.name}</span>
                        </div>
                    </div>
                </SelectItem>
            )}
        </Select>
    )
}

export default CurrencyInput