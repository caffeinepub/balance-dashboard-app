import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface TipData {
  artwork: string;
  latestTx: number;
  comment: string;
}

const tipsData: TipData[] = [
  { artwork: "Open Secret #7", latestTx: 500, comment: "Beautiful work" },
  { artwork: "Open Secret #3", latestTx: 250, comment: "Love it" },
  {
    artwork: "Open Secret #3",
    latestTx: 400,
    comment: "great example of hybrid digital physical art. Keep up good work!",
  },
  { artwork: "Open Secret #12", latestTx: 1000, comment: "Incredible" },
  { artwork: "Open Secret #5", latestTx: 100, comment: "Thank you" },
  { artwork: "Open Secret #9", latestTx: 300, comment: "Amazing" },
];

interface MarqueeTextProps {
  text: string;
}

function MarqueeText({ text }: MarqueeTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const shouldScroll = text.length > 25;

  if (!shouldScroll) {
    return <span className="text-gray-400 italic">{text}</span>;
  }

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`inline-block whitespace-nowrap text-gray-400 italic ${isPaused ? "animate-marquee-right-paused" : "animate-marquee-right"}`}
      >
        {text}
      </div>
    </div>
  );
}

function TipsTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-wider">TIPS</h2>

      <div className="rounded-lg border border-gray-800 overflow-hidden">
        <ScrollArea className="h-[300px]">
          <Table style={{ tableLayout: "fixed", width: "100%" }}>
            <colgroup>
              <col style={{ width: "15%" }} />
              <col style={{ width: "45%" }} />
              <col style={{ width: "40%" }} />
            </colgroup>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-transparent">
                <TableHead className="text-gray-400 font-medium">
                  Latest TX
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Artwork
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Comment
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tipsData.map((item, index) => (
                <TableRow
                  key={`${item.artwork}-${item.latestTx}-${index}`}
                  data-ocid={`tips.item.${index + 1}`}
                  className="border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  <TableCell className="font-mono">
                    {item.latestTx.toLocaleString()}
                  </TableCell>
                  <TableCell className="font-medium">{item.artwork}</TableCell>
                  <TableCell className="overflow-hidden max-w-0">
                    <MarqueeText text={item.comment} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
}

export default TipsTable;
