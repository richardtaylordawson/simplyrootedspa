import Default from "@/templates/Default"
import Color from "@/components/Color"

export default function ColorPalette() {
  return (
    <Default
      title="Color Palette"
      description="Colors for Simply Rooted Spa website"
    >
      <Color bg="#000" />
      <Color bg="#A3654E" />
      <Color bg="#704526" />
      <Color bg="#A17456" />
      <Color bg="#DFB585" />
      <Color bg="#CE9270" />
      {/* Wall Pink */}
      <Color bg="#D49B7E" />
      <Color bg="#CDA083" />
      <Color bg="#D7B8A3" />
      <Color bg="#E7C3A9" />
      <Color bg="#F9CEB0" />
      <Color bg="#F6DFCD" />
      <Color bg="#FAE7D9" />
    </Default>
  )
}
