<?php

namespace Chicorycom\Cigaformation\Http\Controllers\ContentTypes;

class Relationship extends BaseType
{
    /**
     * @return string
     */
    public function handle()
    {
        return $this->request->input($this->row->field);
    }
}
