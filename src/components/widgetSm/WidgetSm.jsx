import ComponentsSm from "./ComponentsSm";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <ComponentsSm name="Elon Musk" title="Tesla." />
        <ComponentsSm name="Steve jobs" title="apple." />
        <ComponentsSm name="Jeff Bezos" title="Amazon." />
        <ComponentsSm name="Mukesh Ambani" title="Reliance Jio." />
        <ComponentsSm name="Mark Zukerberg" title="Meta." />
      </ul>
    </div>
  );
}
