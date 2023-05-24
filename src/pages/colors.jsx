import Default from "@/templates/Default"
import { Color } from "@/components/Color"

export default function ColorPalette() {
  return (
    <Default
      title="Color Palette"
      description="Colors for Simply Rooted Spa website"
    >
      <Color background="#000" />
      <Color background="#A3654E" />
      <Color background="#704526" />
      <Color background="#A17456" />
      <Color background="#DFB585" />
      <Color background="#CE9270" />
      {/* Wall Pink */}
      <Color background="#D49B7E" />
      <Color background="#CDA083" />
      <Color background="#D7B8A3" />
      <Color background="#E7C3A9" />
      <Color background="#F9CEB0" />
      <Color background="#F6DFCD" />
      <Color background="#FAE7D9" />
    </Default>
  )
}
