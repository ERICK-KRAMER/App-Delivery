import { Children, ReactNode } from "react";
import { About } from "./about";
import { Category } from "./category";
import { SocialNetworkContainer } from "./socialNetworks";
import React from "react";

interface FooterComponentProps {
  children: ReactNode;
}

const FooterComponent = ({ children }: FooterComponentProps) => {
  const aboutItems = Children.toArray(children).filter(
    (child: ReactNode) => {
      if (React.isValidElement(child)) {
        return child.type === About;
      }
      return false;
    }
  );

  const categoryItems = Children.toArray(children).filter(
    (child: ReactNode) => {
      if (React.isValidElement(child)) {
        return child.type === Category;
      }
      return false;
    }
  );

  const socialNetworkContainerItems = Children.toArray(children).filter(
    (child: ReactNode) => {
      if (React.isValidElement(child)) {
        return child.type === SocialNetworkContainer;
      }
      return false;
    }
  );

  return (
    <footer className="bg-slate-800 p-6 text-white max-[800px]:mb-14">
      <div className="grid grid-cols-3 gap-4 mb-6">
          {aboutItems}
          {categoryItems}
      </div>
      <div className="grid grid-flow-col place-items-center py-2 max-[800px]:grid-flow-row gap-5 max-[800px]:flex max-[800px]:flex-col">
        <div className="col-span-3">
          {socialNetworkContainerItems}
        </div>
        <div className="bg-white text-black p-4 rounded-md w-[420px] max-[480px]:w-[400px] ">
          <h3 className="text-center font-bold text-2xl">Horario de Funcionamento</h3>
          <ul className="font-semibold">
            <li>DOM: Fechado</li>
            <li>Seg: 11:00 as 12:22</li>
            <li>Ter: 11:00 as 14:00 / 19:00 as 23:30</li>
            <li>Qua: 11:00 as 14:00 / 19:00 as 23:30</li>
            <li>Qui: 11:00 as 14:00 / 19:00 as 23:30</li>
            <li>Sex: 11:00 as 14:00</li>
            <li>Sáb: 11:00 as 14:00 / 19:00 as 23:30</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { FooterComponent };
