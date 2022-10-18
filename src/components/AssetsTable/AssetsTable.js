import React from "react";
import styles from "./AssetsTable.module.scss";
import Blockies from "react-blockies";
import { getEllipsisTxt } from "../../App";

export const AssetsTable = ({ object }) => {
  return (
    <div className={styles.Table}>
      <table>
        <thead>
          <tr className={styles.TR}>
            <th>Asset</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {object.map((tableObject, index) => {
            return (
              <tr key={index} className={[styles.TR, "tr"]}>
                {tableObject.quote_rate && tableObject.balance > 0 ? (
                  <>
                    <td className={styles.AccountBlock}>
                      <img
                        width={"40px"}
                        height={"40px"}
                        src={tableObject.logo_url}
                        alt={"# "}
                      />
                      <span>{tableObject.contract_name}</span>
                    </td>
                    <td>${tableObject.quote_rate.toFixed(2)}</td>
                    <td>
                      {(
                        tableObject.balance *
                        10 ** -tableObject.contract_decimals
                      ).toFixed(3)}
                      <span>&nbsp;{tableObject.contract_ticker_symbol}</span>
                    </td>
                    <td>
                      ${" "}
                      {(
                        tableObject.balance *
                        10 ** -tableObject.contract_decimals
                      ).toFixed(2) * tableObject.quote_rate.toFixed(2)}
                    </td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};