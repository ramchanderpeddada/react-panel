import ComponentLg from "./ComponentLg";
import "./widgetLg.css";

export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <ComponentLg
          name="Elon Musk"
          date="09-08-2020"
          amount="$2215.51"
          type="Approved"
        />
        <ComponentLg
          name="Steve jobs"
          date="23-04-2011"
          amount="$234.99"
          type="Declined"
        />
        <ComponentLg
          name="Jeff Bezos"
          date="12-02-2019"
          amount="$912.42"
          type="Declined"
        />
        <ComponentLg
          name="Mukesh Ambani"
          date="08-07-2015"
          amount="$1134.34"
          type="Approved"
        />
        <ComponentLg
          name="Mark Zukerberg"
          date="29-09-2014"
          amount="$765.09"
          type="Declined"
        />
      </table>
    </div>
  );
}
