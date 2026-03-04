import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BalanceData {
  position: number;
  artwork: string;
  balance: number;
}

const balanceData: BalanceData[] = [
  { position: 1, artwork: "Open Secret #7", balance: 2577 },
  { position: 2, artwork: "Open Secret #3", balance: 1842 },
  { position: 3, artwork: "Open Secret #12", balance: 1205 },
  { position: 4, artwork: "Open Secret #5", balance: 894 },
  { position: 5, artwork: "Open Secret #9", balance: 456 },
];

function BalanceTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-wider">BALANCE</h2>

      <div className="rounded-lg border border-gray-800 overflow-hidden">
        <ScrollArea className="h-[300px]">
          <Table style={{ tableLayout: "fixed", width: "100%" }}>
            <colgroup>
              <col style={{ width: "15%" }} />
              <col style={{ width: "45%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-transparent">
                <TableHead className="text-gray-400 font-medium">
                  Position
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Artwork
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Balance
                </TableHead>
                <TableHead className="text-gray-400 font-medium" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {balanceData.map((item, index) => (
                <TableRow
                  key={item.position}
                  data-ocid={`balance.item.${index + 1}`}
                  className="border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  <TableCell className="text-gray-400">
                    #{item.position}
                  </TableCell>
                  <TableCell className="font-medium">{item.artwork}</TableCell>
                  <TableCell className="font-mono">
                    {item.balance.toLocaleString()}
                  </TableCell>
                  <TableCell />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
}

export default BalanceTable;
